const truncateAddress = (address) => {
  const truncatedAddress = `${address.slice(0, 3)}...${address.slice(
    address.length - 3,
    address.length
  )}`
  return truncatedAddress
}

export { truncateAddress }
