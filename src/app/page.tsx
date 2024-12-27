import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                Anasayfa
              </Link>
              <Link href="/about" className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                Biz Kimiz
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="https://instagram.com/selinozturk" target="_blank" rel="noopener noreferrer" 
                className="text-gray-800 hover:text-blue-600 text-lg">
                Instagram
              </Link>
              <Link href="https://linkedin.com/in/selinozturk" target="_blank" rel="noopener noreferrer" 
                className="text-gray-800 hover:text-blue-600 text-lg">
                LinkedIn
              </Link>
              <Link href="https://github.com/selinozturk" target="_blank" rel="noopener noreferrer" 
                className="text-gray-800 hover:text-blue-600 text-lg">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog Sayfam</h1>
          <p className="text-gray-600">Teknoloji ve yazılım hakkında düşüncelerim</p>
        </header>
      </main>
    </div>
  )
} 