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
    <div>
      <SubHeader
        title={PAGE_LABELS.fr.artists}
        tabs={Object.values(Artist)}
        activeTab={activeArtist}
        setActiveTab={setActiveArtist}
      />
      <PageLayout>
        <div className="text-sm/8 md:text-lg/12 font-extralight text-justify px-6">
          {artists[activeArtist as Artist]}
        </div>
      </PageLayout>
    </div>
  )
}
