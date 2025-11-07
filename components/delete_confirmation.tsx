import React from "react"

type DeleteConfirmationProps = {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
  title: string
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
}) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg p-6 w-80 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
          Confirmer la suppression
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Es-tu sûr de vouloir supprimer le produit{" "}
          <strong className="text-gray-800 dark:text-gray-200">{title} </strong>?
        </p>
        <div className="flex justify-end mt-6">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded mr-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
            onClick={onCancel}
          >
            Annuler
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded dark:bg-red-600 dark:hover:bg-red-700"
            onClick={onConfirm}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation
