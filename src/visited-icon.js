function visitedIcon(icon) {
    if (icon.includes('-gray.png')) {
        return icon;
    } else {
        return icon.replace('.png', '-gray.png');
    }
}