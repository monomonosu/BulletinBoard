import Head from 'next/head'
import styleLayout from '../styles/components/layout.module.css'

const Layout = ({ children, title }) => {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div className={styleLayout.default_bg}>
          <header>
            <h1 className={styleLayout.title}>掲示板</h1>
          </header>
            <main className={styleLayout.main_container}>{children}</main>
        </div>
      </>
    );
}

export default Layout