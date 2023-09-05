import { Database as DB } from '@/types/supabase'

type Tweet = DB['public']['Tables']['tweets']['Row']

declare global {
  type Database = DB
  type Employee = DB['public']['Tables']['employees']['Row']
}
