function index(req, res) {
  try {
    res
      .status(200)
      .json({
        success: true,
        message: 'Connection successfully',
        data: []
      })

  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: 'Error to list all meetups',
        data: []
      })
  }
}

module.exports = {
  index
}