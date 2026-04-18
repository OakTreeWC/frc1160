'use server';
import checkCredentials from '@/app/lib/checkCredentials';
import crypto from 'crypto';
import { revalidatePath } from 'next/cache';

function splitOnFirst(str : string, separator : string) {
  // Find the index of the first occurrence of the separator.
  let index = str.indexOf(separator);

  // If the separator is not found, return the original string in an array.
  if (index === -1) {
    return [str];
  }

  // Slice the string into two parts.
  let part1 = str.slice(0, index);
  let part2 = str.slice(index + separator.length);

  return [part1, part2];
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization') ?? '';
    if (!authHeader.startsWith('Basic ')) {
      return new Response(JSON.stringify({ error: 'Missing or malformed token' }), { status: 401 });
    }

    const base64Credentials = authHeader.split(' ')[1] ?? '';
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = splitOnFirst(credentials, ":");
    console.log(username);
    console.log(password);

    if (!username || !password) {
      return new Response(JSON.stringify({ error: 'Invalid credentials format' }), { status: 400 });
    }

    const user = await checkCredentials(username,password);
    console.log(user);
    if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });

    revalidatePath("/");
    revalidatePath("/cabinet/business");
    revalidatePath("/cabinet/engineering");
      
    return new Response(JSON.stringify({ username }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

