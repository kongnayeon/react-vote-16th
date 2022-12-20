import { atom } from 'recoil';

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: true,
});

export const votedLeaderState = atom<string>({
  key: 'votedLeader',
  default: '강나연',
});