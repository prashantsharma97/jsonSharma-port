import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-auto z-20">
      <div className="border-t border-secondary/20 pt-8 flex justify-between items-center">
        <p className="text-secondary/60">© 2025 Jsonsharma. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-secondary/60 hover:text-secondary transition-opacity">Privacy</a>
          <a href="#" className="text-secondary/60 hover:text-secondary transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  );
};