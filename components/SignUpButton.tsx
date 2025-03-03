'use client';

import { Button } from "@/components/ui/button";

export default function SignUpButton() {
  const handleSignUp = () => {
    window.open('https://forms.gle/sXqEkehnWFTqg4py7', '_blank');
  };

  return (
    <Button 
      size="lg" 
      onClick={handleSignUp}
      className="px-8 py-6 text-lg"
    >
      sign up
    </Button>
  );
} 