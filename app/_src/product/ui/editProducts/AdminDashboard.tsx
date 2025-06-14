"use client"

import { useState } from "react"

interface ArtVersion {
  id: string
  type: string
  size: string
  price: number
  stock: number
}

interface Artwork {
  id: string
  title: string
  artist: string
  description: string
  category: string
  image: string
  versions: ArtVersion[]
  createdAt: string
}

export const AdminDashboard = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([
    {
      id: "1",
      title: "Coucher de Soleil Abstrait",
      artist: "Marie Dubois",
      description:
        "Une œuvre abstraite capturant la beauté d'un coucher de soleil",
      category: "Abstrait",
      image: "/placeholder.svg?height=200&width=200",
      createdAt: "2024-01-15",
      versions: [
        { id: "v1", type: "Toile", size: "30x40cm", price: 250, stock: 5 },
        {
          id: "v2",
          type: "Impression",
          size: "50x70cm",
          price: 120,
          stock: 12,
        },
        { id: "v3", type: "Toile", size: "60x80cm", price: 450, stock: 2 },
      ],
    },
    {
      id: "2",
      title: "Portrait Moderne",
      artist: "Jean Martin",
      description: "Portrait contemporain aux couleurs vives",
      category: "Portrait",
      image: "/placeholder.svg?height=200&width=200",
      createdAt: "2024-02-20",
      versions: [
        { id: "v4", type: "Toile", size: "40x50cm", price: 380, stock: 3 },
        { id: "v5", type: "Impression", size: "30x40cm", price: 85, stock: 8 },
      ],
    },
  ])

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [activeTab, setActiveTab] = useState("artworks")
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false)
  const [isVersionModalOpen, setIsVersionModalOpen] = useState(false)
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null)
  const [editingVersion, setEditingVersion] = useState<ArtVersion | null>(null)

  const [newArtwork, setNewArtwork] = useState({
    title: "",
    artist: "",
    description: "",
    category: "",
    image: "",
  })

  const [newVersion, setNewVersion] = useState({
    type: "",
    size: "",
    price: 0,
    stock: 0,
  })

  const handleAddArtwork = () => {
    const artwork: Artwork = {
      id: Date.now().toString(),
      ...newArtwork,
      versions: [],
      createdAt: new Date().toISOString().split("T")[0],
    }
    setArtworks([...artworks, artwork])
    setNewArtwork({
      title: "",
      artist: "",
      description: "",
      category: "",
      image: "",
    })
    setIsArtworkModalOpen(false)
  }

  const handleEditArtwork = () => {
    if (editingArtwork) {
      setArtworks(
        artworks.map((art) =>
          art.id === editingArtwork.id ? editingArtwork : art
        )
      )
      setEditingArtwork(null)
      setIsArtworkModalOpen(false)
    }
  }

  const handleDeleteArtwork = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?")) {
      setArtworks(artworks.filter((art) => art.id !== id))
    }
  }

  const handleAddVersion = () => {
    if (selectedArtwork) {
      const version: ArtVersion = {
        id: Date.now().toString(),
        ...newVersion,
      }
      const updatedArtwork = {
        ...selectedArtwork,
        versions: [...selectedArtwork.versions, version],
      }
      setArtworks(
        artworks.map((art) =>
          art.id === selectedArtwork.id ? updatedArtwork : art
        )
      )
      setSelectedArtwork(updatedArtwork)
      setNewVersion({ type: "", size: "", price: 0, stock: 0 })
      setIsVersionModalOpen(false)
    }
  }

  const handleEditVersion = () => {
    if (selectedArtwork && editingVersion) {
      const updatedArtwork = {
        ...selectedArtwork,
        versions: selectedArtwork.versions.map((v) =>
          v.id === editingVersion.id ? editingVersion : v
        ),
      }
      setArtworks(
        artworks.map((art) =>
          art.id === selectedArtwork.id ? updatedArtwork : art
        )
      )
      setSelectedArtwork(updatedArtwork)
      setEditingVersion(null)
      setIsVersionModalOpen(false)
    }
  }

  const handleDeleteVersion = (versionId: string) => {
    if (
      selectedArtwork &&
      confirm("Êtes-vous sûr de vouloir supprimer cette version ?")
    ) {
      const updatedArtwork = {
        ...selectedArtwork,
        versions: selectedArtwork.versions.filter((v) => v.id !== versionId),
      }
      setArtworks(
        artworks.map((art) =>
          art.id === selectedArtwork.id ? updatedArtwork : art
        )
      )
      setSelectedArtwork(updatedArtwork)
    }
  }

  const getTotalStock = (artwork: Artwork) => {
    return artwork.versions.reduce((total, version) => total + version.stock, 0)
  }

  const openArtworkModal = (artwork?: Artwork) => {
    if (artwork) {
      setEditingArtwork(artwork)
    } else {
      setEditingArtwork(null)
      setNewArtwork({
        title: "",
        artist: "",
        description: "",
        category: "",
        image: "",
      })
    }
    setIsArtworkModalOpen(true)
  }

  const openVersionModal = (version?: ArtVersion) => {
    if (version) {
      setEditingVersion(version)
    } else {
      setEditingVersion(null)
      setNewVersion({ type: "", size: "", price: 0, stock: 0 })
    }
    setIsVersionModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-cream-50 p-3 sm:p-4 md:p-6 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
            Admin
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600">
            Gérez votre catalogue d'œuvres d'art et leurs versions
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-4 md:mb-6">
          <div className="flex space-x-1 bg-cream-100 p-1 rounded-lg border border-cream-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("artworks")}
              className={`flex items-center px-3 sm:px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
                activeTab === "artworks"
                  ? "bg-cream-200 text-charcoal-900 shadow-sm"
                  : "text-charcoal-600 hover:text-charcoal-800"
              }`}
            >
              <span className="mr-1 sm:mr-2">📦</span>
              <span className="hidden sm:inline">Œuvres d'Art</span>
              <span className="sm:hidden">Œuvres</span>
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`flex items-center px-3 sm:px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
                activeTab === "details"
                  ? "bg-cream-200 text-charcoal-900 shadow-sm"
                  : "text-charcoal-600 hover:text-charcoal-800"
              }`}
            >
              <span className="mr-1 sm:mr-2">👁️</span>
              <span className="hidden sm:inline">Détails & Versions</span>
              <span className="sm:hidden">Détails</span>
            </button>
          </div>
        </div>

        {/* Artworks Tab */}
        {activeTab === "artworks" && (
          <div className="bg-cream-100 border border-cream-200 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border-b border-cream-200 gap-4">
              <h2 className="text-lg sm:text-xl font-semibold text-charcoal-900">
                Liste des Œuvres
              </h2>
              <button
                onClick={() => openArtworkModal()}
                className="flex items-center justify-center px-4 py-2 bg-charcoal-800 text-cream-50 rounded-md hover:bg-charcoal-900 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                <span className="mr-2">+</span>
                <span className="hidden sm:inline">Ajouter une œuvre</span>
                <span className="sm:hidden">Ajouter</span>
              </button>
            </div>
            <div className="p-4 sm:p-6">
              {/* Mobile Card View */}
              <div className="block md:hidden space-y-4">
                {artworks.map((artwork) => (
                  <div
                    key={artwork.id}
                    className="bg-cream-50 border border-cream-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-charcoal-900 truncate">
                          {artwork.title}
                        </h3>
                        <p className="text-sm text-charcoal-700 truncate">
                          {artwork.artist}
                        </p>
                      </div>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-cream-200 text-charcoal-800 rounded-full ml-2 whitespace-nowrap">
                        {artwork.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-charcoal-600 mb-3">
                      <span>
                        {artwork.versions.length} version
                        {artwork.versions.length > 1 ? "s" : ""}
                      </span>
                      <span>Stock: {getTotalStock(artwork)}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedArtwork(artwork)
                          setActiveTab("details")
                        }}
                        className="flex-1 p-2 text-charcoal-700 hover:bg-cream-200 rounded border border-cream-300 text-center text-sm"
                      >
                        👁️ Voir
                      </button>
                      <button
                        onClick={() => openArtworkModal(artwork)}
                        className="flex-1 p-2 text-charcoal-700 hover:bg-cream-200 rounded border border-cream-300 text-center text-sm"
                      >
                        ✏️ Modifier
                      </button>
                      <button
                        onClick={() => handleDeleteArtwork(artwork.id)}
                        className="p-2 text-red-700 hover:bg-red-50 rounded border border-red-300 text-sm"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-cream-300">
                      <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                        Titre
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                        Artiste
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                        Catégorie
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                        Versions
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                        Stock Total
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {artworks.map((artwork) => (
                      <tr
                        key={artwork.id}
                        className="border-b border-cream-300 hover:bg-cream-50"
                      >
                        <td className="py-3 px-4 font-medium text-charcoal-900">
                          {artwork.title}
                        </td>
                        <td className="py-3 px-4 text-charcoal-700">
                          {artwork.artist}
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-cream-200 text-charcoal-800 rounded-full">
                            {artwork.category}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-charcoal-700">
                          {artwork.versions.length}
                        </td>
                        <td className="py-3 px-4 text-charcoal-700">
                          {getTotalStock(artwork)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                setSelectedArtwork(artwork)
                                setActiveTab("details")
                              }}
                              className="p-1 text-charcoal-700 hover:bg-cream-200 rounded border border-cream-300"
                              title="Voir détails"
                            >
                              👁️
                            </button>
                            <button
                              onClick={() => openArtworkModal(artwork)}
                              className="p-1 text-charcoal-700 hover:bg-cream-200 rounded border border-cream-300"
                              title="Modifier"
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() => handleDeleteArtwork(artwork.id)}
                              className="p-1 text-red-700 hover:bg-red-50 rounded border border-red-300"
                              title="Supprimer"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Details Tab */}
        {activeTab === "details" && (
          <div>
            {selectedArtwork ? (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
                {/* Artwork Details */}
                <div className="xl:col-span-1 bg-cream-100 border border-cream-200 rounded-lg shadow-sm">
                  <div className="p-4 sm:p-6 border-b border-cream-200">
                    <h2 className="text-lg sm:text-xl font-semibold text-charcoal-900">
                      Détails de l'œuvre
                    </h2>
                  </div>
                  <div className="p-4 sm:p-6 space-y-4">
                    <div>
                      <img
                        src={selectedArtwork.image || "/placeholder.svg"}
                        alt={selectedArtwork.title}
                        className="w-full h-40 sm:h-48 object-cover rounded-lg bg-cream-200"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 text-sm sm:text-base">
                        {selectedArtwork.title}
                      </h3>
                      <p className="text-charcoal-600 text-sm">
                        par {selectedArtwork.artist}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-cream-200 text-charcoal-800 rounded-full">
                        {selectedArtwork.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-charcoal-700">
                      {selectedArtwork.description}
                    </p>
                  </div>
                </div>

                {/* Versions */}
                <div className="xl:col-span-2 bg-cream-100 border border-cream-200 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border-b border-cream-200 gap-4">
                    <h2 className="text-lg sm:text-xl font-semibold text-charcoal-900">
                      Versions disponibles
                    </h2>
                    <button
                      onClick={() => openVersionModal()}
                      className="flex items-center justify-center px-3 py-2 text-sm bg-charcoal-800 text-cream-50 rounded-md hover:bg-charcoal-900 transition-colors w-full sm:w-auto"
                    >
                      <span className="mr-1">+</span>
                      <span className="hidden sm:inline">
                        Ajouter une version
                      </span>
                      <span className="sm:hidden">Ajouter</span>
                    </button>
                  </div>
                  <div className="p-4 sm:p-6">
                    {/* Mobile Version Cards */}
                    <div className="block lg:hidden space-y-3">
                      {selectedArtwork.versions.map((version) => (
                        <div
                          key={version.id}
                          className="bg-cream-50 border border-cream-200 rounded-lg p-3"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-medium text-charcoal-900 text-sm">
                                {version.type}
                              </div>
                              <div className="text-xs text-charcoal-700">
                                {version.size}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-charcoal-900 text-sm">
                                {version.price}€
                              </div>
                              <span
                                className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                  version.stock > 5
                                    ? "bg-green-100 text-green-800"
                                    : version.stock > 0
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                Stock: {version.stock}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-3">
                            <button
                              onClick={() => openVersionModal(version)}
                              className="flex-1 p-2 text-charcoal-700 hover:bg-cream-200 rounded border border-cream-300 text-center text-xs"
                            >
                              ✏️ Modifier
                            </button>
                            <button
                              onClick={() => handleDeleteVersion(version.id)}
                              className="p-2 text-red-700 hover:bg-red-50 rounded border border-red-300 text-xs"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden lg:block overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="border-b border-cream-300">
                            <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                              Type
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                              Taille
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                              Prix
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                              Stock
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-charcoal-800">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedArtwork.versions.map((version) => (
                            <tr
                              key={version.id}
                              className="border-b border-cream-300 hover:bg-cream-50"
                            >
                              <td className="py-3 px-4 text-charcoal-900">
                                {version.type}
                              </td>
                              <td className="py-3 px-4 text-charcoal-700">
                                {version.size}
                              </td>
                              <td className="py-3 px-4 text-charcoal-700">
                                {version.price}€
                              </td>
                              <td className="py-3 px-4">
                                <span
                                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                    version.stock > 5
                                      ? "bg-green-100 text-green-800"
                                      : version.stock > 0
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {version.stock}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => openVersionModal(version)}
                                    className="p-1 text-charcoal-700 hover:bg-cream-200 rounded border border-cream-300"
                                    title="Modifier"
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteVersion(version.id)
                                    }
                                    className="p-1 text-red-700 hover:bg-red-50 rounded border border-red-300"
                                    title="Supprimer"
                                  >
                                    🗑️
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-cream-100 border border-cream-200 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-48 sm:h-64">
                  <div className="text-center px-4">
                    <div className="text-3xl sm:text-4xl mb-4">📦</div>
                    <p className="text-charcoal-600 text-sm sm:text-base">
                      Sélectionnez une œuvre pour voir ses détails et gérer ses
                      versions
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Artwork Modal */}
        {isArtworkModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-cream-50 border border-cream-200 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6 border-b border-cream-200 sticky top-0 bg-cream-50">
                <h3 className="text-lg font-semibold text-charcoal-900">
                  {editingArtwork
                    ? "Modifier l'œuvre"
                    : "Ajouter une nouvelle œuvre"}
                </h3>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Titre
                  </label>
                  <input
                    type="text"
                    value={
                      editingArtwork ? editingArtwork.title : newArtwork.title
                    }
                    onChange={(e) =>
                      editingArtwork
                        ? setEditingArtwork({
                            ...editingArtwork,
                            title: e.target.value,
                          })
                        : setNewArtwork({
                            ...newArtwork,
                            title: e.target.value,
                          })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Artiste
                  </label>
                  <input
                    type="text"
                    value={
                      editingArtwork ? editingArtwork.artist : newArtwork.artist
                    }
                    onChange={(e) =>
                      editingArtwork
                        ? setEditingArtwork({
                            ...editingArtwork,
                            artist: e.target.value,
                          })
                        : setNewArtwork({
                            ...newArtwork,
                            artist: e.target.value,
                          })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Catégorie
                  </label>
                  <select
                    value={
                      editingArtwork
                        ? editingArtwork.category
                        : newArtwork.category
                    }
                    onChange={(e) =>
                      editingArtwork
                        ? setEditingArtwork({
                            ...editingArtwork,
                            category: e.target.value,
                          })
                        : setNewArtwork({
                            ...newArtwork,
                            category: e.target.value,
                          })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base"
                  >
                    <option value="">Sélectionner une catégorie</option>
                    <option value="Abstrait">Abstrait</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Paysage">Paysage</option>
                    <option value="Nature Morte">Nature Morte</option>
                    <option value="Contemporain">Contemporain</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={
                      editingArtwork
                        ? editingArtwork.description
                        : newArtwork.description
                    }
                    onChange={(e) =>
                      editingArtwork
                        ? setEditingArtwork({
                            ...editingArtwork,
                            description: e.target.value,
                          })
                        : setNewArtwork({
                            ...newArtwork,
                            description: e.target.value,
                          })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                  <button
                    onClick={
                      editingArtwork ? handleEditArtwork : handleAddArtwork
                    }
                    className="flex-1 px-4 py-2 bg-charcoal-800 text-cream-50 rounded-md hover:bg-charcoal-900 transition-colors text-sm sm:text-base"
                  >
                    {editingArtwork ? "Modifier" : "Ajouter"}
                  </button>
                  <button
                    onClick={() => setIsArtworkModalOpen(false)}
                    className="flex-1 px-4 py-2 bg-cream-200 text-charcoal-800 rounded-md hover:bg-cream-300 transition-colors text-sm sm:text-base"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Version Modal */}
        {isVersionModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-cream-50 border border-cream-200 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6 border-b border-cream-200 sticky top-0 bg-cream-50">
                <h3 className="text-lg font-semibold text-charcoal-900">
                  {editingVersion
                    ? "Modifier la version"
                    : "Ajouter une nouvelle version"}
                </h3>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Type
                  </label>
                  <select
                    value={
                      editingVersion ? editingVersion.type : newVersion.type
                    }
                    onChange={(e) =>
                      editingVersion
                        ? setEditingVersion({
                            ...editingVersion,
                            type: e.target.value,
                          })
                        : setNewVersion({ ...newVersion, type: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base"
                  >
                    <option value="">Sélectionner un type</option>
                    <option value="Toile">Toile</option>
                    <option value="Impression">Impression</option>
                    <option value="Affiche">Affiche</option>
                    <option value="Carte postale">Carte postale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Taille
                  </label>
                  <input
                    type="text"
                    placeholder="ex: 30x40cm"
                    value={
                      editingVersion ? editingVersion.size : newVersion.size
                    }
                    onChange={(e) =>
                      editingVersion
                        ? setEditingVersion({
                            ...editingVersion,
                            size: e.target.value,
                          })
                        : setNewVersion({ ...newVersion, size: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Prix (€)
                  </label>
                  <input
                    type="number"
                    value={
                      editingVersion ? editingVersion.price : newVersion.price
                    }
                    onChange={(e) =>
                      editingVersion
                        ? setEditingVersion({
                            ...editingVersion,
                            price: Number(e.target.value),
                          })
                        : setNewVersion({
                            ...newVersion,
                            price: Number(e.target.value),
                          })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-800 mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    value={
                      editingVersion ? editingVersion.stock : newVersion.stock
                    }
                    onChange={(e) =>
                      editingVersion
                        ? setEditingVersion({
                            ...editingVersion,
                            stock: Number(e.target.value),
                          })
                        : setNewVersion({
                            ...newVersion,
                            stock: Number(e.target.value),
                          })
                    }
                    className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-md text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-500 text-sm sm:text-base"
                  />
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                  <button
                    onClick={
                      editingVersion ? handleEditVersion : handleAddVersion
                    }
                    className="flex-1 px-4 py-2 bg-charcoal-800 text-cream-50 rounded-md hover:bg-charcoal-900 transition-colors text-sm sm:text-base"
                  >
                    {editingVersion ? "Modifier" : "Ajouter"}
                  </button>
                  <button
                    onClick={() => setIsVersionModalOpen(false)}
                    className="flex-1 px-4 py-2 bg-cream-200 text-charcoal-800 rounded-md hover:bg-cream-300 transition-colors text-sm sm:text-base"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
