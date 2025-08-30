import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Få en gratis prototyp',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
}

export default function FormPage() {
  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" async />
      <div className="fixed inset-0 overflow-hidden">
        <iframe 
          data-tally-src="https://tally.so/r/3Na8Lb?formEventsForwarding=1" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Få en gratis prototyp"
          className="absolute top-0 right-0 bottom-0 left-0 border-0"
        />
      </div>
    </>
  )
}