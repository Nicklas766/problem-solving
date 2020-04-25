class Checker implements Comparator<Player> {
    // complete this method
  public int compare(Player a, Player b) {
      
      if (a.score > b.score) {
          return -1;
      }

      if (a.score < b.score) { 
          return 1; 
      }

      return a.name.compareTo(b.name);
  }
}