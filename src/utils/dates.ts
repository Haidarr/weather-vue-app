export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
  }).format(date);
};

export const formatTime = (dateTimeStr: string): string => {
  const date = new Date(dateTimeStr.replace(" ", "T")); // Convert to Date object
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 0-23 hours to 12-hour format
  const minutesStr = minutes.toString().padStart(2, "0"); // Ensure two-digit minutes

  return `${hours}:${minutesStr} ${ampm}`;
}

export const formatDateTime = (dateString: string): string => {
  if(!dateString) return "";
  
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
  }).format(date);
};



  