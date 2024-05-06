import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Thai Senna</title>
                <meta name="description" content="Thai Senna" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <div className={`${styles.divemconstrucao}`}>
                    <div className={`${styles.divemconstrucaotop}`}>
                        <Image
                            src="/images/logoprincipal2.png"
                            alt="Thai Senna"
                            className={styles.logoprincipal}
                            width={350}
                            height={150}
                            priority
                        />
                    </div>
                    <div
                        className={`${styles.divemconstrucaobody} ${styles.gap2}`}
                    >
                        <h1 className={`${styles.h1home}`}>
                            Site em construção
                        </h1>

                        <div className={`${styles.gap1} ${styles.social}`}>
                            <h3 className={`${styles.h3home}`}>Instagram</h3>
                            <div
                                className={`${styles.flex} ${styles.social} ${styles.gap1}`}
                            >
                                <a
                                    href="https://www.instagram.com/thainasennafotografia/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={`link-effects ${styles.linkhome}`}
                                >
                                    @thainasennafotografia
                                </a>
                                <a
                                    href="https://www.instagram.com/thainasennaph/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={`link-effects ${styles.linkhome}`}
                                >
                                    @thainasennaph
                                </a>
                            </div>
                        </div>

                        <div className={`${styles.gap1} ${styles.social}`}>
                            <h3 className={`${styles.h3home}`}>WhatsApp</h3>
                            <div
                                className={`${styles.flex} ${styles.flexcustom}`}
                            >
                                <a
                                    href="https://api.whatsapp.com/send/?phone=5575991342452"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={`link-effects montserrat bold ${styles.linkhome2}`}
                                >
                                    75 9 9134-2452
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.divemconstrucaofooter}`}>
                        <h3 className={`${styles.h3home} montserrat`}>
                            © copyright 2024 por{' '}
                            <a
                                href="https://navegantesdigitais.com.br"
                                target="_blank"
                                rel="noreferrer noopener"
                                className={`link-effects montserrat bold ${styles.linkhome2}`}
                            >
                                navegantesdigitais.com.br
                            </a>
                        </h3>
                    </div>
                </div>
            </main>
        </>
    )
}
