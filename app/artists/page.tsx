"use client"

import { PAGE_LABELS } from "@/app/_shared/shared.const"
import { Tab } from "@/app/_shared/shared.types"
import { SubHeader } from "@/app/_shared/components/SubHeader"
import { PageLayout } from "@/app/page-layout"
import { useState } from "react"
import { Artist } from "@/app/artists/artists.enum"
import { artists } from "@/app/artists/artists.const"

export default function ArtistPage() {
  const [activeArtist, setActiveArtist] = useState<Tab>(Artist.barniak)

  return (
    <div className="grid grid-rows-[auto_1fr] h-full min-h-0">
      <SubHeader
        title={PAGE_LABELS.fr.artists}
        tabs={Object.values(Artist)}
        activeTab={activeArtist}
        setActiveTab={setActiveArtist}
      />
      <PageLayout>
        <div className="text-sm/8 md:text-lg/12 font-extralight text-justify md:w-4xl px-6 overflow-auto h-full min-h-0 no-scrollbar ">
          <div className="max-w-90 m-auto">{artists[activeArtist as Artist]}</div>
        </div>
      </PageLayout>
    </div>
  )
}
