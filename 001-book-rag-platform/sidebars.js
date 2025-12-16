/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview'
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        {
          type: 'category',
          label: 'Module 1: ROS 2',
          items: [
            'module-1-ros2/introduction',
            'module-1-ros2/middleware-for-robot-control',
            'module-1-ros2/ros2-nodes-topics-and-services',
            'module-1-ros2/bridging-python-agents-to-ros-controllers',
            'module-1-ros2/understanding-urdf-for-humanoids',
          ],
        },
        {
          type: 'category',
          label: 'Module 2: Gazebo',
          items: [
            'module-2-gazebo/introduction',
            'module-2-gazebo/physics-simulation',
            'module-2-gazebo/gazebo-simulation',
            'module-2-gazebo/unity-digital-twin',
            'module-2-gazebo/sensor-simulation',

          ],
        },
        {
          type: 'category',
          label: 'Module 3: NVIDIA Isaac',
          items: [
            'module-3-nvidia-isaac/introduction',
            'module-3-nvidia-isaac/isaac-sim',
            'module-3-nvidia-isaac/isaac-ros',
            'module-3-nvidia-isaac/vslam',
            'module-3-nvidia-isaac/nav2-path-planning',

          ],
        },
        {
          type: 'category',
          label: 'Module 4: Vision-Language-Action',
          items: [
            'module-4-vla/introduction',
            'module-4-vla/voice-to-action',
            'module-4-vla/cognitive-planning',
            'module-4-vla/vision-perception',
            'module-4-vla/capstone-autonomous-humanoid',
          ],
        },
      ],
    },
  ],
};
