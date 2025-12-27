/**
 * License: MIT
 * Author : elias Josué HAJJAR LLAUQUEN <elias-josue.hajjar-llauquen@epitech.eu>
 * Date   : 11/12/2025
 */

import React from "react";

const InputComposer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="max-w-3xl mx-auto px-4 py-3">
        <div className="flex items-end gap-2 border border-gray-300 rounded-2xl bg-gray-900 px-4 py-3 shadow-sm">
          <textarea
            rows={1}
            placeholder="Type your message..."
            className="
              w-full
              resize-none
              bg-transparent
              text-sm
              leading-6
              outline-none
              min-h-[48px]
              max-h-[200px]
              overflow-y-auto
              placeholder-gray-400
            "
          />

          <button
            type="button"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              shrink-0
              rounded-full
              bg-black
              text-white
              hover:bg-gray-800
              disabled:bg-gray-300
              disabled:cursor-not-allowed
            "
          >
            →
          </button>
        </div>
      <p className="mt-2 text-xs text-gray-500 left-0 right-0 text-center">
          Press <kbd className="rounded bg-gray-700 px-1 py-0.5">Enter</kbd> to
          send, <kbd className="rounded bg-gray-700 px-1 py-0.5">Shift</kbd> +
          <kbd className="rounded bg-gray-700 px-1 py-0.5">Enter</kbd> for new
          line.
        </p>
      </div>
    </div>
  );
};

export default InputComposer;

