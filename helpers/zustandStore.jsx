import create from 'zustand'

export const useStore = create(set => ({
  currentView: 'welcome', // 'welcome' || '...'
  setCurrentView: (newView) => set(() => {
    return { currentView: newView }
  }),
  isPotrait: false,
  setIsPotrait: (newState) => set(() => {
    return { isPotrait: newState }
  }),
  isMuted: false,
  setIsMuted: (newState) => set(() => {
    return { isMuted: newState }
  })
}))