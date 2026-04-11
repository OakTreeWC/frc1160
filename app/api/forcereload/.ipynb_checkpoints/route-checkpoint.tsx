import checkCredentials from '@/app/lib/checkCredentials';
import { clearCache } from '@/app/lib/data';
import crypto from 'crypto';


export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization') ?? '';
    if (!authHeader.startsWith('Basic ')) {
      return new Response(JSON.stringify({ error: 'Missing or malformed token' }), { status: 401 });
    }

    const base64Credentials = authHeader.split(' ')[1] ?? '';
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    if (!username || !password) {
      return new Response(JSON.stringify({ error: 'Invalid credentials format' }), { status: 400 });
    }

    const user = await checkCredentials(username,password);
    console.log(user);
    if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });

    await clearCache();
      
    return new Response(JSON.stringify({ username }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

