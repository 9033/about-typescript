type presidents = "노무현" | "김대중" | "이명박"

function showPresidents(name: presidents | presidents[]){
  console.log(name)
}

const presidents = "노무현"

showPresidents(presidents)
