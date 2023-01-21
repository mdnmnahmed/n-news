export default function getDate(date) {
    date = new Date(date);
    return date.toDateString();
}