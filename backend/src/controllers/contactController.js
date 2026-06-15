import Contact from '../models/Contact.js';

// @desc    Submit a contact form message
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Please add all fields' });
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: 'Contact form submitted successfully',
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all contact messages (Admin)
// @route   GET /api/contact
// @access  Private (Assume admin only in real app)
export const getContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
