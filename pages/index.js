import Image from 'next/image'

export default function HelloIpx() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1543097840-fc84594dd9e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80"
      alt="Royal Opera"
      width={920}
      quality={75}
    />
  )
}
