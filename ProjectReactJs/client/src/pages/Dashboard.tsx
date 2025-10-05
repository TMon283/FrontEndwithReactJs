import React, { useState } from 'react';
import CreateBoardModal from '../components/CreateBoardModal';
import UpdateBoardModal from '../components/UpdateBoardModal';

interface Board {
  id: string;
  title: string;
  image: string;
  isStarred?: boolean;
  color?: string;
  background?: string;
}

const Dashboard: React.FC = () => {
  const [boards, setBoards] = useState<Board[]>([
    { id: '1', title: 'Board Title 01', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', isStarred: false },
    { id: '2', title: 'Board Title 02', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', isStarred: false },
    { id: '3', title: 'Board Title 03', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400', isStarred: false },
    { id: '4', title: 'Board Title 01', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', isStarred: false },
  ]);

  const [starredBoards] = useState<Board[]>([
    { id: '5', title: 'Important Board 01', image: '', isStarred: true },
    { id: '6', title: 'Important Board 02', image: '', isStarred: true },
  ]);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleOpenCreate = () => setIsCreateOpen(true);
  const handleCloseCreate = () => setIsCreateOpen(false);

  const handleOpenUpdate = (board: Board) => {
    setSelectedBoard(board);
    setIsUpdateOpen(true);
  };
  const handleCloseUpdate = () => {
    setSelectedBoard(null);
    setIsUpdateOpen(false);
  };

  const handleOpenDelete = (board: Board) => {
    setSelectedBoard(board);
    setIsDeleteOpen(true);
  };
  const handleCloseDelete = () => {
    setSelectedBoard(null);
    setIsDeleteOpen(false);
  };

  const handleConfirmDelete = () => {
    if (!selectedBoard) return;
    setBoards((prev) => prev.filter((b) => b.id !== selectedBoard.id));
    setSelectedBoard(null);
    setIsDeleteOpen(false);
  };

  const handleCreateBoard = (data: { title: string; background?: string; color?: string }) => {
    const newBoard: Board = {
      id: Date.now().toString(),
      title: data.title,
      image: data.background || '',
      isStarred: false,
      color: data.color,
      background: data.background,
    };
    setBoards((prev) => [newBoard, ...prev]);
  };

  const handleUpdateBoard = (data: { title: string; background?: string; color?: string }) => {
    if (!selectedBoard) return;
    setBoards((prev) =>
      prev.map((b) =>
        b.id === selectedBoard.id
          ? {
              ...b,
              title: data.title,
              image: data.background ?? b.image,
              color: data.color ?? b.color,
              background: data.background ?? b.background,
            }
          : b
      )
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="5" height="14" rx="1" fill="white"/>
                <rect x="10" y="1" width="5" height="8" rx="1" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-800">Trello</span>
          </div>
        </div>

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-70 bg-white border-r border-gray-200 ">
          {/* Navigation */}
          <div className="flex-1 px-2 py-3">
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4 px-2">
                Your Workspaces
              </h3>
              <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-2 py-2 text-blue-600 rounded hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl w-5 h-5 pb-1 flex justify-center items-center">≡</span>
                <span className="font-medium">Boards</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-2 py-2 text-blue-600 rounded hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl w-5 h-5 pb-1 flex justify-center items-center">☆</span>
                <span className="font-medium">Starred Boards</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-2 py-2 text-blue-600 rounded hover:bg-gray-100 transition-colors"
              >
                <span className="text-base border w-5 h-5 pb-[1px] flex justify-center items-center">✕</span>
                <span className="font-medium">Closed Boards</span>
              </a>
            </nav>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="px-1 pb-6 border-t border-gray-200 pt-4 space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-blue-600 rounded hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span className="font-medium">Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-blue-600 rounded hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              <span className="font-medium">Sign out</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="max-w-7xl mx-auto px-8 py-6">
            {/* Content Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
                Your Workspaces
              </h1>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Share
                </button>
                <button className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Export
                </button>
                <button className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  This week
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 9L2 5h8z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Boards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
              {boards.map((board) => (
                <div
                  key={board.id}
                  className="relative h-36 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  style={{
                    backgroundImage: board.image ? `url(${board.image})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: board.image ? undefined : '#d1d5db'
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <h3 className="text-white font-semibold text-lg drop-shadow">
                      {board.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenUpdate(board)}
                        className="px-3 py-2 bg-blue-700 rounded text-white text-sm font-medium hover:bg-blue-800 transition-all flex items-center gap-2 shadow"
                      >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="9"/>
                            <path d="M12 6v6l4 2"/>
                          </svg>
                          Edit this board
                      </button>
                      <button
                        onClick={() => handleOpenDelete(board)}
                        className="px-3 py-2 bg-red-600 rounded text-white text-sm font-medium hover:bg-red-700 transition-all flex items-center gap-2 shadow"
                      >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                            <path d="M10 11v6"/>
                            <path d="M14 11v6"/>
                          </svg>
                          Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Create New Board */}
            <div className="mb-12">
              <button onClick={handleOpenCreate} className="px-5 py-2.5 bg-white border-2 border-gray-300 rounded-lg text-gray-600 text-base font-normal hover:border-gray-400 hover:bg-gray-50 transition-colors">
                Create new board
              </button>
            </div>

            {/* Starred Boards Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Starred Boards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {starredBoards.map((board) => (
                  <div
                    key={board.id}
                    className="relative h-36 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group bg-black"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                    <div className="absolute inset-0 bg-gray-500 bg-opacity-0 group-hover:bg-opacity-5 transition-all" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-between">
                      <h3 className="text-white font-semibold text-lg">
                        {board.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modals */}
      <CreateBoardModal
        isOpen={isCreateOpen}
        onClose={handleCloseCreate}
        onCreate={(data) => {
          handleCreateBoard(data);
        }}
      />
      <UpdateBoardModal
        isOpen={isUpdateOpen}
        onClose={handleCloseUpdate}
        initialData={selectedBoard ? { title: selectedBoard.title, background: selectedBoard.background, color: selectedBoard.color } : undefined}
        onUpdate={(data) => {
          handleUpdateBoard(data);
        }}
      />
      {isDeleteOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-sm p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Xóa board?</h3>
            <p className="text-sm text-gray-600 mb-6">
              Bạn có chắc muốn xóa board "{selectedBoard?.title}"? 
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCloseDelete}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

