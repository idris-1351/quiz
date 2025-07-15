let number = 1;
    let price = 607;

    const plus = () => {
      number++;
      document.getElementById("number").textContent = number;
      document.getElementById("quantity").textContent = number * price;
    };

    const minus = () => {
      if (number > 1) {
        number--;
        document.getElementById("number").textContent = number;
        document.getElementById("quantity").textContent = number * price;
      }
    };