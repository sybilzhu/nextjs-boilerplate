import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Image
              src="/avatar.jpg"
              alt="晓芳Sybil"
              width={240}
              height={240}
              className="relative rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              priority
            />
          </div>

          {/* Intro */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              晓芳Sybil
            </h1>
            <p className="text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              6年+金融科技行业支付产品经理经验
              <br />
              目前专注在AI智能体&编程领域
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <span className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                产品经理
              </span>
              <span className="px-6 py-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
                AI智能体
              </span>
              <span className="px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                编程开发
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
          我的技能
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
              B端产品设计
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              精通B端产品设计与系统搭建，具备完整的产品生命周期管理经验
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
              跨部门协作
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              擅长跨部门的项目协作，推动团队高效完成产品目标
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-12 pb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
          联系我
        </h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-2xl">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <Image
                src="/wechat-qr.jpg"
                alt="微信二维码"
                width={200}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-3">
                微信号
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Sybilhaha
              </p>
              <p className="text-slate-500 dark:text-slate-500">
                扫描上方二维码或搜索微信号添加好友
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="container mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
          <p>© 2025 晓芳Sybil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
