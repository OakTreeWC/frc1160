'use server';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache'; 

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
export async function clearCache() {
    console.log("revalidating paths");
    await revalidatePath("/", "layout");    
    console.log("revalidated paths");
}

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

export async function removeSponsor(sponsor: any[]) {
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

export async function addUser(user: any) {
  try {
      user = user[0];
      await sql`
        CREATE TABLE IF NOT EXISTS users (
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
      await sql`INSERT INTO users VALUES (${user.name},${user.email},${user.password})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add user.');
  }
}

export async function removeUser(user: any) {
  try {
      user = user[0];
      await sql`DELETE FROM users WHERE ctid IN (
        SELECT ctid
        FROM users
        WHERE email = ${user.email}
        LIMIT 1
      )`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete user.');
  }
}

export async function getUser(email: string) {
  try {
    // If using a tagged-template SQL helper that accepts parameters inline:
    const result: any[] = await sql`SELECT * FROM users WHERE email = ${email} LIMIT 1;`;

    // If result is a rows array (common), grab first row; otherwise adapt to your client
    const user = result[0];

    return user;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
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

export async function getBusiness() {
  try {
    const data = await sql`SELECT * FROM business ORDER BY sort`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sponsors.');
  }
}