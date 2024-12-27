import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biz Kimiz - Blog Sitem',
  description: 'Ekibimiz, vizyonumuz ve misyonumuz hakkında bilgi.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Biz Kimiz Bölümü */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-12">Biz Kimiz</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Biz, teknoloji ve yazılım dünyasındaki gelişmeleri yakından takip eden, 
              bu alandaki deneyimlerimizi ve bilgilerimizi sizlerle paylaşmayı amaçlayan 
              bir ekibiz. 2023 yılından beri, web geliştirme, programlama ve dijital 
              teknolojiler alanında özgün içerikler üretiyoruz.
            </p>
            <p className="text-gray-700">
              Amacımız, karmaşık teknolojik konuları herkesin anlayabileceği bir dille 
              aktarmak ve Türkçe kaynak eksikliğini gidermekte katkıda bulunmak. 
              Makalelerimizde güncel teknolojileri, best practice'leri ve kendi 
              deneyimlerimizi paylaşıyoruz.
            </p>
          </div>
        </section>

        {/* Vizyon ve Misyon Bölümü */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Vizyon ve Misyon</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Vizyonumuz</h3>
              <p className="text-gray-700">
                Türkiye'de teknoloji ve yazılım alanında öncü bir bilgi kaynağı olmak, 
                kaliteli içeriklerle topluluk bilincini geliştirmek ve geleceğin 
                teknoloji liderlerine ilham vermek.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Misyonumuz</h3>
              <p className="text-gray-700">
                Güncel teknoloji trendlerini takip ederek, anlaşılır ve uygulanabilir 
                bilgiler sunmak, okuyucularımızın profesyonel gelişimine katkıda 
                bulunmak ve teknoloji topluluğunu güçlendirmek.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 