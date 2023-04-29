import uniqid from 'uniqid';

const getTemplate = (title) => {
  if (title === 'Education') {
    return {
      id: uniqid(),
      postviewid: uniqid(),

      data: {
        School_Name: {
          input: '',
          isLarge: false,
          id: uniqid(),
        },
        Location: {
          input: '',
          isLarge: false,
          id: uniqid(),
        },
        Degree: {
          input: '',
          isLarge: false,
          id: uniqid(),
        },
        Start_Date: {
          input: '',
          isLarge: false,
          id: uniqid(),
        },
        End_Date: {
          input: '',
          isLarge: false,
          id: uniqid(),
        },
        About_Your_Subject: {
          input: '',
          isLarge: true,
          id: uniqid(),
        },
      },
    };
  }

  return {
    id: uniqid(),
    postviewid: uniqid(),

    data: {
      Title: {
        input: '',
        isLarge: false,
        id: uniqid(),
      },
      Company: {
        input: '',
        isLarge: false,
        id: uniqid(),
      },
      Start_Date: {
        input: '',
        isLarge: false,
        id: uniqid(),
      },
      End_Date: {
        input: '',
        isLarge: false,
        id: uniqid(),
      },
      About_Your_Role: {
        input: '',
        isLarge: true,
        id: uniqid(),
      },
    },
  };
};

export { getTemplate };
