import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'
import { useState } from 'react'

export function Footer() {
  const [companyDetails, setCompanyDetails] = useState(false)
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <div className="flex items-center text-gray-900">
            <Logo className="h-10 w-auto" />
            <div className="ml-4">
              <p
                className="text-base font-semibold"
                onClick={() => setCompanyDetails(!companyDetails)}
              >
                codestream
              </p>
              <p className="mt-1 text-sm">Dream, Design, Develop, Deliver</p>
            </div>
          </div>

          <div>
            <p className="mt-6 text-sm text-gray-500 md:mt-0">
              &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
            {companyDetails && (
              <p className="mt-6 text-sm text-gray-500 md:mt-0">
                CodeStream Systems (PTY) LTD, VAT Registration:{' '}
                <strong>4580279968</strong>, Company Registration:{' '}
                <strong>2017/049262/07</strong>
              </p>
            )}
          </div>
        </div>
      </Container>
    </footer>
  )
}
