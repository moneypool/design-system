import toast from 'toast-me';

const clipboard = content => {
  navigator.clipboard.writeText(content);
  toast('copied Emmet abbreviation to clipboard!', {duration: 2000});
};

export {clipboard};
