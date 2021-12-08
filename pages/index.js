import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  const res = await fetch(`https://kshitizstha.com.np/api/rashifal`)
  const data = await res.json();
  return {
      props: { lists: data }
  }
}

export default function Home(lists) {
  return (
    <>
      {JSON.stringify(lists)}
    </>
  )
}
