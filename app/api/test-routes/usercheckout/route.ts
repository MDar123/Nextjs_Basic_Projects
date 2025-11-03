import { checkoutPageTest } from "@/tests/checkout";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await checkoutPageTest();
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { status: "ERROR", message: error.message || "Unexpected failure" },
      { status: 500 }
    );
  }
}
