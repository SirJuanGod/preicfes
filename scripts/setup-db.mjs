import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function main() {
    console.log('Connecting to database and creating table...');
    try {
        const result = await sql`
            CREATE TABLE IF NOT EXISTS ai_training_dataset (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                messages_dataset JSONB NOT NULL,
                final_recommendation TEXT NOT NULL,
                metadata JSONB
            );
        `;
        console.log('Table created successfully:', result);
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

main();
