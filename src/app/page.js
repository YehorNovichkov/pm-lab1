import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <Link
                href="/form"
                className="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Заповнити форму
            </Link>
            <Link
                href="/admin"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Адміністрування
            </Link>
        </div>
    )
}
