const User = require('../models/user');
const HttpException = require('../models/http-exception');

class UserController {
  async createUser(req, res) {
    const newUser = req.body;

    try {
      const user = await User.create(newUser);

      res.json(user);
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async getUserById(req, res) {
    const userId = req.params.id;

    try {
      const user = await User.findById(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async updateUser(req, res) {
    const userId = req.params.id;
    const newUserData = req.body;

    try {
      const updatedUser = await User.findByIdAndUpdate(userId, newUserData, { new: true });

      if (!updatedUser) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(updatedUser);
      }
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async deleteUser(req, res) {
    const userId = req.params.id;

    try {
      const user = await User.findByIdAndRemove(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json({ message: 'User deleted successfully' });
      }
    } catch (error) {
      throw aHttpException(500, error?.message || 'Internal server error');
    }
  }

  async deleteAllUsers(req, res) {
    try {
      await User.deleteMany();

      res.json({ message: 'All users deleted successfully' });
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async getUserByTeamId(req, res) {
    const teamId = req.params.teamId;

    try {
      const users = await User.find({ teamId });

      if (!users || users.length === 0) {
        res.status(404).json({ error: 'Users not found' });
      } else {
        res.json(users);
      }
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async getUserByToken(req, res) {
    const token = req.params.token;

    try {
      const user = await User.findOne({ token });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async getUsersByAccessType(req, res) {
    const accessType = req.params.accessType;

    try {
      const users = await User.find({ accessType });

      if (!users || users.length === 0) {
        res.status(404).json({ error: 'Users not found' });
      } else {
        res.json(users);
      }
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }

  async addUsersInBulk(req, res) {
    const users = req.body;

    try {
      const createdUsers = await User.insertMany(users);

      res.json(createdUsers);
    } catch (error) {
      throw new HttpException(500, error?.message || 'Internal server error');
    }
  }
}

module.exports = UserController;
