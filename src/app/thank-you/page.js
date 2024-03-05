import Link from 'next/link'

export default function ThankYou() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-white text-4xl pb-2">Дякую!</h1>
            <p className="text-white pb-6">
                Форму було успішно заповнено та відправлено
            </p>
            <Link
                href="/"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                На головну
            </Link>
        </div>
    )
}
