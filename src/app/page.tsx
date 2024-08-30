import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agrivista Farms</title>
        <meta name="description" content="Revolutionizing Agriculture through Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>
        <h1>The Role of Technology in Revolutionizing Agriculture</h1>
        <div className={styles.cta}>
          <Link href="/get-started" className={styles.button}>Get Started</Link>
          <Link href="/learn-more" className={styles.button}>Learn More</Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h2>Our Passion for Agriculture Nurturing Growth and Sustaining the Future</h2>
          <p>Since 1976, we have been committed to supporting sustainable agricultural practices.</p>
          <Link href="/get-started" className={styles.button}>Get Started</Link>
        </section>

        <section className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <Image src="/icons/blog.svg" alt="Blog and Article Writing" width={60} height={60} />
              <h3>Blog and Article Writing</h3>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/icons/website.svg" alt="Website Content" width={60} height={60} />
              <h3>Website Content</h3>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/icons/content.svg" alt="Content Strategy and Consulting" width={60} height={60} />
              <h3>Content Strategy and Consulting</h3>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/icons/social.svg" alt="Social Media Management" width={60} height={60} />
              <h3>Social Media Management</h3>
            </div>
          </div>
        </section>

        <section className={styles.featuredProducts}>
          <h2>Our Featured Products</h2>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <Image src="/images/rice.jpg" alt="Rice" width={200} height={150} />
              <h3>Rice</h3>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/wheat.jpg" alt="Wheat" width={200} height={150} />
              <h3>Wheat</h3>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/pumpkin.jpg" alt="Pumpkin" width={200} height={150} />
              <h3>Pumpkin</h3>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/cabbage.jpg" alt="Cabbage" width={200} height={150} />
              <h3>Cabbage</h3>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Agrivista Farms. All Rights Reserved.</p>
      </footer>
    </div>
  );
}