export default function TruncateText(name: string) {
    if (name.length < 25)
        return name;
    return name.substring(0, 25) + "...";
}