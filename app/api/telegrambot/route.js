import { app } from "@/firebase.js/firebase"
import { getFirestore } from "firebase/firestore"
import TelegramBot from "node-telegram-bot-api"

const token = process.env.TELEGRAM_BOT_TOKEN
const publicChatId = "-4006439389"
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
