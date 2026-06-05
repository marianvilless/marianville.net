export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      app_users: {
        Row: {
          age: number | null
          agree_transport: string | null
          allotment: string | null
          baptized: string | null
          block: string | null
          communion: string | null
          confirmation: string | null
          contact_number: string | null
          created_at: string | null
          dob: string | null
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_number: string | null
          emergency_relationship: string | null
          employer_name: string | null
          father_email: string | null
          father_name: string | null
          father_occupation: string | null
          gname: string | null
          guardian_contact_number: string | null
          guardian_email: string | null
          guardian_name: string | null
          guardian_occupation: string | null
          guardian_place_of_origin: string | null
          guardian_relationship: string | null
          house_number: string | null
          id: number
          mode: string | null
          mother_contact_number: string | null
          mother_email: string | null
          mother_employer_name: string | null
          mother_name: string | null
          mother_occupation: string | null
          mother_place_of_origin: string | null
          place_of_origin: string | null
          religion: string | null
          road: string | null
          school: string | null
          section: string | null
          suburban: string | null
          surname: string | null
          transport: string | null
          unit: string | null
        }
        Insert: {
          age?: number | null
          agree_transport?: string | null
          allotment?: string | null
          baptized?: string | null
          block?: string | null
          communion?: string | null
          confirmation?: string | null
          contact_number?: string | null
          created_at?: string | null
          dob?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_number?: string | null
          emergency_relationship?: string | null
          employer_name?: string | null
          father_email?: string | null
          father_name?: string | null
          father_occupation?: string | null
          gname?: string | null
          guardian_contact_number?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_occupation?: string | null
          guardian_place_of_origin?: string | null
          guardian_relationship?: string | null
          house_number?: string | null
          id?: number
          mode?: string | null
          mother_contact_number?: string | null
          mother_email?: string | null
          mother_employer_name?: string | null
          mother_name?: string | null
          mother_occupation?: string | null
          mother_place_of_origin?: string | null
          place_of_origin?: string | null
          religion?: string | null
          road?: string | null
          school?: string | null
          section?: string | null
          suburban?: string | null
          surname?: string | null
          transport?: string | null
          unit?: string | null
        }
        Update: {
          age?: number | null
          agree_transport?: string | null
          allotment?: string | null
          baptized?: string | null
          block?: string | null
          communion?: string | null
          confirmation?: string | null
          contact_number?: string | null
          created_at?: string | null
          dob?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_number?: string | null
          emergency_relationship?: string | null
          employer_name?: string | null
          father_email?: string | null
          father_name?: string | null
          father_occupation?: string | null
          gname?: string | null
          guardian_contact_number?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_occupation?: string | null
          guardian_place_of_origin?: string | null
          guardian_relationship?: string | null
          house_number?: string | null
          id?: number
          mode?: string | null
          mother_contact_number?: string | null
          mother_email?: string | null
          mother_employer_name?: string | null
          mother_name?: string | null
          mother_occupation?: string | null
          mother_place_of_origin?: string | null
          place_of_origin?: string | null
          religion?: string | null
          road?: string | null
          school?: string | null
          section?: string | null
          suburban?: string | null
          surname?: string | null
          transport?: string | null
          unit?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "super_admin" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["super_admin", "admin"],
    },
  },
} as const
