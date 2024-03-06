import { NextRequest, NextResponse } from "next/server";
import { LoginValidation } from "../lib/LoginValidation";
import LoginForm from "../auth/login/Login";

export async function POST(request: NextRequest) {
    const { email, password } = LoginForm.parse(await request.json());
} catch (error) {
    return NextResponse.badRequest(error.message);
}