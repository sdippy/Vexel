import Modal from "@/shared/components/ui/modal/modal";

import { useModalStore } from "@/shared/types";

export default function ProfileModal() {
  const { isModalOpen, closeProfile } = useModalStore();

  return (
    <Modal isOpen={isModalOpen} onClose={closeProfile}>
      <div className="flex flex-col">
        {/* top */}
        <div className="flex items-center gap-4">
          <div
            className="
              w-14 h-14
              rounded-full
              bg-blue-500
            "
          />

          <div>
            <h2
              className="
                text-white
                text-xl
                font-semibold
              "
            >
              Aleksandr
            </h2>

            <p
              className="
                text-sm
                text-white/50
              "
            >
              Frontend Developer
            </p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-6 flex flex-col gap-2">
          <button
            className="
              h-11
              rounded-xl
              bg-white/[0.04]
              text-white
              hover:bg-white/[0.08]
              transition
            "
          >
            Settings
          </button>

          <button
            className="
              h-11
              rounded-xl
              bg-red-500/10
              text-red-400
              hover:bg-red-500/20
              transition
            "
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
}
