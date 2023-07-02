import knex from 'knex'

import Server from 'next/server';

// @see https://github.com/vercel/next.js/issues/48524
const { NextResponse } = Server;

export async function GET(request) {
    return new NextResponse('Dummy API', { status: 400 });
}
