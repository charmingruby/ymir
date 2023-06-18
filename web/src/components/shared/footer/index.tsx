import { ContentContainer } from '../content-container'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <div className="bg-gray-900 py-8">
      <ContentContainer>
        <div className="flex flex-col items-center gap-2 text-gray-300">
          {/* Medias */}
          <div className="mb-2 flex gap-4">
            <FaLinkedinIn size={24} />
            <FaGithub size={24} />
          </div>

          {/* License */}
          <div>
            <span>Released under the MIT License</span>
          </div>

          {/* Copyright */}
          <div>
            <span>
              Copyright © 2023{' '}
              <span className="font-medium text-primary-300">Ymir Dev</span>.
              All rights reserved
            </span>
          </div>

          {/* Details */}
          <div>
            <span>
              Designed by{' '}
              <span className="font-medium text-primary-300">Gustavo Dias</span>
              , hosted by{' '}
              <span className="font-medium text-primary-300">Netfly</span>
            </span>
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}
