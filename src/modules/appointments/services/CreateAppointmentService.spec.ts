import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be albe to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12346428648',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12346428648');
  });

  it('should not be albe to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 19);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '12346428648',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '12346428648',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
