import React, { useState } from 'react';

interface Card {
  id: string;
  title: string;
  isCompleted?: boolean;
}

interface List {
  id: string;
  title: string;
  cards: Card[];
}

interface Board {
  id: string;
  name: string;
  color: string;
}

const Board: React.FC = () => {
  const [lists, setLists] = useState<List[]>([
    {
      id: '1',
      title: 'Todo',
      cards: [
        { id: '1', title: 'Thuê DJ', isCompleted: true },
        { id: '2', title: 'Lên kịch bản chương trình', isCompleted: true },
        { id: '3', title: 'Chuẩn bị kịch', isCompleted: false },
        { id: '4', title: 'Kịch bản', isCompleted: true },
        { id: '5', title: 'Thuê MC', isCompleted: false },
      ],
    },
    {
      id: '2',
      title: 'In-progress',
      cards: [],
    },
  ]);

  const [yourBoards] = useState<Board[]>([
    { id: '1', name: '123123213', color: 'bg-blue-500' },
    { id: '2', name: '42314', color: 'bg-gray-500' },
    { id: '3', name: 'My Trello board', color: 'bg-pink-500' },
    { id: '4', name: 'Tổ chức sự kiện ...', color: 'bg-gray-400' },
  ]);

  const [showAddCard, setShowAddCard] = useState<string | null>(null);
  const [newCardTitle, setNewCardTitle] = useState('');

  const handleAddCard = (listId: string) => {
    if (newCardTitle.trim()) {
      setLists(
        lists.map((list) =>
          list.id === listId
            ? {
                ...list,
                cards: [
                  ...list.cards,
                  {
                    id: Date.now().toString(),
                    title: newCardTitle,
                    isCompleted: false,
                  },
                ],
              }
            : list
        )
      );
      setNewCardTitle('');
      setShowAddCard(null);
    }
  };

  const toggleCardComplete = (listId: string, cardId: string) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.map((card) =>
                card.id === cardId
                  ? { ...card, isCompleted: !card.isCompleted }
                  : card
              ),
            }
          : list
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
        <div className="w-70 bg-white border-r border-gray-200">
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

          {/* Your boards (replaces Settings / Sign out) */}
          <div className="px-2 pb-6 border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-3 px-2">
              <h3 className="text-sm font-semibold text-gray-800">Your boards</h3>
              <button className="text-gray-500 hover:text-gray-700 text-xl">+</button>
            </div>
            <div className="space-y-1">
              {yourBoards.map((board) => (
                <a
                  key={board.id}
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 transition-colors ${
                    board.name === 'Tổ chức sự kiện ...' ? 'bg-gray-200' : ''
                  }`}
                >
                  <div className={`w-6 h-6 ${board.color} rounded`}></div>
                  <span className="text-sm text-gray-800 truncate">{board.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="flex flex-col min-h-full">
            {/* Board Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Tổ chức sự kiện Year-end party !
                  </h1>
                  <button className="text-gray-600 hover:text-gray-800 p-1 rounded transition-colors">
                    <span className="text-xl">☆</span>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors flex items-center gap-2 text-sm">
                    <span>⊞</span>
                    Board
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
                    <span>☰</span>
                    Table
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
                    <span>✕</span>
                    Close this board
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
                    <span>≣</span>
                    Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Board Content */}
            <div className="flex-1 overflow-x-auto p-6">
              <div className="flex gap-4 h-full items-start">
            {/* Lists */}
            {lists.map((list) => (
              <div
                key={list.id}
                className="w-72 flex-shrink-0 bg-white rounded-lg border border-gray-200 p-3 flex flex-col"
                style={{ maxHeight: 'calc(100vh - 200px)' }}
              >
                {/* List Header */}
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-semibold text-gray-800 text-sm">{list.title}</h2>
                  <button className="text-gray-500 hover:text-gray-700 text-lg">
                    ⋯
                  </button>
                </div>

                {/* Cards */}
                <div className="flex-1 overflow-y-auto space-y-2 mb-2">
                  {list.cards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white rounded border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => toggleCardComplete(list.id, card.id)}
                    >
                      <div className="flex items-start gap-2">
                        {card.isCompleted && (
                          <span className="text-white w-4 h-4 px-1 mt-1 bg-green-600 rounded-[50%] text-xs flex-shrink-0 font-bold">
                            ✓
                          </span>
                        )}
                        <span
                          className={`text-sm text-gray-800 ${
                            card.isCompleted ? 'line-through text-gray-500' : ''
                          }`}
                        >
                          {card.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Card */}
                {showAddCard === list.id ? (
                  <div className="space-y-2">
                    <textarea
                      className="w-full p-2 text-sm border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter a title for this card..."
                      value={newCardTitle}
                      onChange={(e) => setNewCardTitle(e.target.value)}
                      rows={3}
                      autoFocus
                    />
                    <div className="flex items-center gap-2">
                      <button
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                        onClick={() => handleAddCard(list.id)}
                      >
                        Add card
                      </button>
                      <button
                        className="text-gray-600 hover:text-gray-800 text-xl"
                        onClick={() => {
                          setShowAddCard(null);
                          setNewCardTitle('');
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors w-full text-sm"
                    onClick={() => setShowAddCard(list.id)}
                  >
                    <span>+</span>
                    <span>Add a card</span>
                    <span className="ml-auto text-gray-400">⎘</span>
                  </button>
                )}
              </div>
            ))}

            {/* Add Another List */}
            <div className="w-72 flex-shrink-0">
              <button className="w-full bg-white hover:bg-gray-50 text-gray-700 rounded-lg p-3 flex items-center gap-2 transition-colors border border-gray-200">
                <span>+</span>
                <span className="font-medium text-sm">Add another list</span>
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;