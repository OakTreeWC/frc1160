'use server';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache'; 

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getSponsors() {
  try {
    const data = await sql`SELECT * FROM sponsors`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function addSponsors(sponsors: any[]) {
  try {
      await sql`
        CREATE TABLE IF NOT EXISTS sponsors (
          name VARCHAR(255) NOT NULL
        );
      `;
      for (const sponsor of sponsors) {
        await sql`INSERT INTO sponsors VALUES (${sponsor})`;
      }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function removeSponsor(sponsor: string) {
  try {
      await sql`DELETE FROM sponsors WHERE ctid IN (
        SELECT ctid
        FROM sponsors
        WHERE name = ${sponsor}
        LIMIT 1
      )`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete sponsor.');
  }
}

export async function getUser(email: string) {
  try {
    // If using a tagged-template SQL helper that accepts parameters inline:
    const result: any[] = await sql`SELECT * FROM users WHERE email = ${email} LIMIT 1;`;

    if (result[0]) {
        return true
    } else { return false }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function createInvite(email: string) {
    try {
        await sql`INSERT INTO invites VALUES (${email})`;
        const result: any[] = await sql`SELECT * FROM invites WHERE email = ${email} LIMIT 1;`;
        return result
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function getInvites() {
  try {
    const data = await sql`SELECT * FROM invites`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invites.');
  }
}

export async function checkInvites(email: string) {
    try {
        const result: any[] = await sql`SELECT * FROM invites WHERE email = ${email} LIMIT 1;`;
        if (result[0]) {
            await sql`DELETE FROM invites WHERE email = ${email};`;
            return true
        } else { return false }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function createEngineering(name: string, position: string, grade: string, years: string) {
  try {
      await sql`
        CREATE TABLE IF NOT EXISTS engineering (
          name VARCHAR(100) NOT NULL,
          position VARCHAR(100) NOT NULL,
          grade INT NOT NULL,
          years INT NOT NULL
        );
      `;
      await sql`INSERT INTO engineering (name, position, grade, years) VALUES (${name}, ${position}, ${grade}, ${years})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function getEngineering() {
  try {
    const data = await sql`SELECT * FROM engineering ORDER BY sort`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function removeEngineering(name: string, position: string, grade: string, years: string) {
    try {
        await sql`DELETE FROM engineering WHERE name = ${name} AND position = ${position} AND grade = ${grade} AND years = ${years};`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}

export async function createBusiness(name: string, position: string, grade: string, years: string) {
  try {
      await sql`
        CREATE TABLE IF NOT EXISTS business (
          name VARCHAR(100) NOT NULL,
          position VARCHAR(100) NOT NULL,
          grade INT NOT NULL,
          years INT NOT NULL
        );
      `;
      await sql`INSERT INTO business (name, position, grade, years) VALUES (${name}, ${position}, ${grade}, ${years})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add sponsor.');
  }
}

export async function getBusiness() {
  try {
    const data = await sql`SELECT * FROM business ORDER BY sort`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}

export async function removeBusiness(name: string, position: string, grade: string, years: string) {
    try {
        await sql`DELETE FROM business WHERE name = ${name} AND position = ${position} AND grade = ${grade} AND years = ${years};`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to remove user.');
    }
}