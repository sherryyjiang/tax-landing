'use client';

import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/Be9qBtT0JWO5ptO8gp2LXa', '_blank');
  };

  return (
    <Button 
      variant="secondary" 
      size="lg" 
      onClick={handleJoinWhatsApp}
      className="gap-2"
    >
      join whatsapp group
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Button>
  );
} 