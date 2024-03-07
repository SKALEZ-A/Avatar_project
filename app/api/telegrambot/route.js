import { app } from "@/firebase/firebase"
import { getFirestore } from "firebase/firestore"
import TelegramBot from "node-telegram-bot-api"

const token = "6757194750:AAGKZv0L7C77wJSr2uzOtatkZvQphe0SI8Q"
const publicChatId = "-1002082842100"
//-1001807148576
const bot = new TelegramBot(token)

const db = getFirestore(app)

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = Number(searchParams.get("userid"))
  console.log(id)
  try {
    const member = await bot.getChatMember(publicChatId, id)
    return Response.json({ member, status: member.status })
  } catch (err) {
    return Response.json({ error: err.message })
  }
}
