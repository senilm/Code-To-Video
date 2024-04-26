import { NextRequest, NextResponse } from "next/server";
import * as esprima from "esprima";
import { parsePythonCode } from "@/utils/pythonParser";

interface Inputs {
  theme: string;
  language: String;
  purpose: string;
  code: string;
}
export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { theme, language, purpose, code } = body as Inputs;
  if (!theme || !language || !purpose || !code) {
    return new Response("Missing required fields", { status: 400 });
  }

  let ast;
  switch (language) {
    case "js":
      ast = esprima.parseScript(code, {
        tokens: true,
        comment: true,
        range: true,
      });
      break;

    case "cpp":
      break;

    case "py":
      try {
        ast = await parsePythonCode(code);
      } catch (error) {
        console.error("Error parsing Python code:", error);
        return new Response("Error parsing Python code", { status: 500 });
      }
    default:
      break;
  }
  console.log(ast);
  return new Response("Success!", { status: 200 });
}
